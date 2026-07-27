import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-private-server');
}

export default function CustomCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-private-server" />;
}
