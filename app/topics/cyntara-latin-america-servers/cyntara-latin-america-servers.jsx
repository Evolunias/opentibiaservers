import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-latin-america-servers');
}

export default function CyntaraLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-latin-america-servers" />;
}
