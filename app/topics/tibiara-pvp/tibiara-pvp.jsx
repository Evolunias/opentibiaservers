import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-pvp');
}

export default function TibiaraPvpKeywordPage() {
  return <StaticKeywordPage slug="tibiara-pvp" />;
}
