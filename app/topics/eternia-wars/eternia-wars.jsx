import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-wars');
}

export default function EterniaWarsKeywordPage() {
  return <StaticKeywordPage slug="eternia-wars" />;
}
