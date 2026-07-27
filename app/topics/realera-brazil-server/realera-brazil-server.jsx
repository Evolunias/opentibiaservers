import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-brazil-server');
}

export default function RealeraBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="realera-brazil-server" />;
}
