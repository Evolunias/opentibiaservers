import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-europe');
}

export default function AlasteraPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-europe" />;
}
