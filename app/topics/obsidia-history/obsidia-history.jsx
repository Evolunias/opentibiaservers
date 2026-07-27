import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('obsidia-history');
}

export default function ObsidiaHistoryKeywordPage() {
  return <StaticKeywordPage slug="obsidia-history" />;
}
