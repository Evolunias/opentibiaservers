import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-sweden-server');
}

export default function CyntaraSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-sweden-server" />;
}
