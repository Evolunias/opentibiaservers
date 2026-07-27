import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-brazil-server');
}

export default function RealestaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-brazil-server" />;
}
