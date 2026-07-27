import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-south-america-server');
}

export default function RealestaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="realesta-south-america-server" />;
}
