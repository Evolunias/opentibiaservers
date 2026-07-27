import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-15-fresh-start-server');
}

export default function Thornia15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-15-fresh-start-server" />;
}
