import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-wars');
}

export default function EvoleraWarsKeywordPage() {
  return <StaticKeywordPage slug="evolera-wars" />;
}
