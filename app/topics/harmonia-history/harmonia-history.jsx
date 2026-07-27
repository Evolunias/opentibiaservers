import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-history');
}

export default function HarmoniaHistoryKeywordPage() {
  return <StaticKeywordPage slug="harmonia-history" />;
}
