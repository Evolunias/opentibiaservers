import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-brazil-server');
}

export default function ThorniaBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-brazil-server" />;
}
