import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-private-server');
}

export default function NewCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-private-server" />;
}
