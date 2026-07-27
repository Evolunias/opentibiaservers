import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('iridia-pvp-history');
}

export default function IridiaPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="iridia-pvp-history" />;
}
