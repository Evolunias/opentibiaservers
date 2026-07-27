import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-6-fresh-start-server');
}

export default function Thornia76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-6-fresh-start-server" />;
}
