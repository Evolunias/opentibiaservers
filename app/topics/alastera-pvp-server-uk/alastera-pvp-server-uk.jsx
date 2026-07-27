import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-uk');
}

export default function AlasteraPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-uk" />;
}
