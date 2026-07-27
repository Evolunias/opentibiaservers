import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eternia-server');
}

export default function EterniaServerKeywordPage() {
  return <StaticKeywordPage slug="eternia-server" />;
}
