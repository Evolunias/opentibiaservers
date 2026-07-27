import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-8-54-fresh-start-server');
}

export default function Thornia854FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-8-54-fresh-start-server" />;
}
