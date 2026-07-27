import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-poland');
}

export default function AlasteraPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-poland" />;
}
