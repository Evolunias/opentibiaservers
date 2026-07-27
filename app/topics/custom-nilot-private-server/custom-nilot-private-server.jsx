import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nilot-private-server');
}

export default function CustomNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-nilot-private-server" />;
}
