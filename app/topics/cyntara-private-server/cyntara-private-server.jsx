import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-private-server');
}

export default function CyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-private-server" />;
}
