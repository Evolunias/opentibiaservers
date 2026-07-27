import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-world');
}

export default function EterniaWorldKeywordPage() {
  return <StaticKeywordPage slug="eternia-world" />;
}
