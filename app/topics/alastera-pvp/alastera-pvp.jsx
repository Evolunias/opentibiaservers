import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-pvp');
}

export default function AlasteraPvpKeywordPage() {
  return <StaticKeywordPage slug="alastera-pvp" />;
}
