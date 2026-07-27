import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('solera-open-pvp');
}

export default function SoleraOpenPvpKeywordPage() {
  return <StaticKeywordPage slug="solera-open-pvp" />;
}
