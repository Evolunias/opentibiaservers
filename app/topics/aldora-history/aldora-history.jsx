import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aldora-history');
}

export default function AldoraHistoryKeywordPage() {
  return <StaticKeywordPage slug="aldora-history" />;
}
