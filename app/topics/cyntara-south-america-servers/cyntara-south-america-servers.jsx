import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-south-america-servers');
}

export default function CyntaraSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-south-america-servers" />;
}
