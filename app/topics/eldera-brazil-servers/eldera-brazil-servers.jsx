import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-brazil-servers');
}

export default function ElderaBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="eldera-brazil-servers" />;
}
