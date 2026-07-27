import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-brazil-servers');
}

export default function RealeraBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="realera-brazil-servers" />;
}
