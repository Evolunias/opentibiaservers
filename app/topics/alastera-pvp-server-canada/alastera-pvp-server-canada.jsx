import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-canada');
}

export default function AlasteraPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-canada" />;
}
