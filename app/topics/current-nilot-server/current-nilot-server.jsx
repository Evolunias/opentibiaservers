import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-server');
}

export default function CurrentNilotServerKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-server" />;
}
