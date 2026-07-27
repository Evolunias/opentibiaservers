import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-chile-servers');
}

export default function CyntaraChileServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-chile-servers" />;
}
