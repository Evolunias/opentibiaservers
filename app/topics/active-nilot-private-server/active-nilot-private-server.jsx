import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nilot-private-server');
}

export default function ActiveNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-nilot-private-server" />;
}
