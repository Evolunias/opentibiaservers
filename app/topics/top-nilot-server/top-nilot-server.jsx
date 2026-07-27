import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-server');
}

export default function TopNilotServerKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-server" />;
}
