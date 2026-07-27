import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp-server-brazil');
}

export default function AlasteraPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp-server-brazil" />;
}
