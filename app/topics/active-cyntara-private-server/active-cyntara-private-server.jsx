import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-private-server');
}

export default function ActiveCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-private-server" />;
}
