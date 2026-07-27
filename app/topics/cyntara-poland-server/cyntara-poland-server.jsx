import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-poland-server');
}

export default function CyntaraPolandServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-poland-server" />;
}
