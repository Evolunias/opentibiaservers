import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-poland');
}

export default function AlasteraNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-poland" />;
}
