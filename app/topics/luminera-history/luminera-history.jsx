import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-history');
}

export default function LumineraHistoryKeywordPage() {
  return <StaticKeywordPage slug="luminera-history" />;
}
