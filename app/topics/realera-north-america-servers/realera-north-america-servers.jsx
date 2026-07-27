import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-north-america-servers');
}

export default function RealeraNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="realera-north-america-servers" />;
}
