import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-13-fresh-start-server');
}

export default function Thornia13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-13-fresh-start-server" />;
}
