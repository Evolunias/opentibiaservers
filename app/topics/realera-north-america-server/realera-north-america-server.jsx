import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-north-america-server');
}

export default function RealeraNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="realera-north-america-server" />;
}
