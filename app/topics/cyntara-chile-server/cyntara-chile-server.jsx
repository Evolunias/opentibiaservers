import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-chile-server');
}

export default function CyntaraChileServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-chile-server" />;
}
