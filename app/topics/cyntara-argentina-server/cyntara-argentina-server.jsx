import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-argentina-server');
}

export default function CyntaraArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-argentina-server" />;
}
