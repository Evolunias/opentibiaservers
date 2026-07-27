import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nilot-private-server');
}

export default function LowrateNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nilot-private-server" />;
}
