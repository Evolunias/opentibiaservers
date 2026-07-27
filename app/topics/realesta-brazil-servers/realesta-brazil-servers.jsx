import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-brazil-servers');
}

export default function RealestaBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-brazil-servers" />;
}
