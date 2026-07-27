import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-private-server');
}

export default function TopNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-private-server" />;
}
