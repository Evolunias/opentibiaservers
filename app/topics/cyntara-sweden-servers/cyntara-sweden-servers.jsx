import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-sweden-servers');
}

export default function CyntaraSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-sweden-servers" />;
}
