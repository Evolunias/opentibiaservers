import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiara-private-server');
}

export default function NewTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-tibiara-private-server" />;
}
