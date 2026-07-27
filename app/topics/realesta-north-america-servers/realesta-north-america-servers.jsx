import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-north-america-servers');
}

export default function RealestaNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-north-america-servers" />;
}
