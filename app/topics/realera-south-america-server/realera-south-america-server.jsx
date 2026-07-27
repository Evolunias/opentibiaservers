import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-south-america-server');
}

export default function RealeraSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="realera-south-america-server" />;
}
