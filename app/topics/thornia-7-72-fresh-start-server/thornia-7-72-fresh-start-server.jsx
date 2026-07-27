import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-7-72-fresh-start-server');
}

export default function Thornia772FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-7-72-fresh-start-server" />;
}
