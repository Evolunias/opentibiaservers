import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-brazil-servers');
}

export default function BlazeraBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="blazera-brazil-servers" />;
}
