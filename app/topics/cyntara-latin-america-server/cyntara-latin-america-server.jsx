import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-latin-america-server');
}

export default function CyntaraLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-latin-america-server" />;
}
