import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-argentina-servers');
}

export default function CyntaraArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-argentina-servers" />;
}
