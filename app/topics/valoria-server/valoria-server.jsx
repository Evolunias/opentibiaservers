import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('valoria-server');
}

export default function ValoriaServerKeywordPage() {
  return <StaticKeywordPage slug="valoria-server" />;
}
