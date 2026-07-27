import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-south-america-server');
}

export default function CyntaraSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-south-america-server" />;
}
