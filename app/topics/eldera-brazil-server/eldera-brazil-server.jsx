import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-brazil-server');
}

export default function ElderaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-brazil-server" />;
}
