import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-south-america-servers');
}

export default function RealestaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="realesta-south-america-servers" />;
}
