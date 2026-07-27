import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-private-server');
}

export default function FreshStartNilotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-private-server" />;
}
