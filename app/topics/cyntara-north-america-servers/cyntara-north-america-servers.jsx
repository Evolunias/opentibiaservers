import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-north-america-servers');
}

export default function CyntaraNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-north-america-servers" />;
}
