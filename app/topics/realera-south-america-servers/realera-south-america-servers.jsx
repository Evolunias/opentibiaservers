import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-south-america-servers');
}

export default function RealeraSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="realera-south-america-servers" />;
}
