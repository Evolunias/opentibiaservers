import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-server');
}

export default function CyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-server" />;
}
