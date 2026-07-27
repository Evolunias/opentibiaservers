import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-north-america-server');
}

export default function CyntaraNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-north-america-server" />;
}
