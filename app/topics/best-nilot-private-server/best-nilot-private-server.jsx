import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-private-server');
}

export default function BestNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-private-server" />;
}
