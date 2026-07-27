import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-server');
}

export default function NewNilotServerKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-server" />;
}
