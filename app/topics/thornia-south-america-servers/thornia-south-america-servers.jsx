import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-south-america-servers');
}

export default function ThorniaSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="thornia-south-america-servers" />;
}
