import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-brazil-server');
}

export default function BlazeraBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-brazil-server" />;
}
