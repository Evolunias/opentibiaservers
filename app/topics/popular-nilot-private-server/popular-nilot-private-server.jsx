import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-nilot-private-server');
}

export default function PopularNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-nilot-private-server" />;
}
