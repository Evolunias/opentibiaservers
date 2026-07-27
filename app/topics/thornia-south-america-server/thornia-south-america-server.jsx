import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-south-america-server');
}

export default function ThorniaSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-south-america-server" />;
}
