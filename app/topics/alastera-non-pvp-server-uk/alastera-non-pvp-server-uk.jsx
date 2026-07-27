import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-non-pvp-server-uk');
}

export default function AlasteraNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-non-pvp-server-uk" />;
}
