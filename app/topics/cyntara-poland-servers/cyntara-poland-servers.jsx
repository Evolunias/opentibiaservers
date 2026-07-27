import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-poland-servers');
}

export default function CyntaraPolandServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-poland-servers" />;
}
