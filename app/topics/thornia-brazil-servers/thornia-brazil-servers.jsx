import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-brazil-servers');
}

export default function ThorniaBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-brazil-servers" />;
}
