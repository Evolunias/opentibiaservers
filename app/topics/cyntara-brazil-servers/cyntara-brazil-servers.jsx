import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-brazil-servers');
}

export default function CyntaraBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="cyntara-brazil-servers" />;
}
