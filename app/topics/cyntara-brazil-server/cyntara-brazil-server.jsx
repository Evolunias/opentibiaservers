import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-brazil-server');
}

export default function CyntaraBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-brazil-server" />;
}
