import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-9-6-fresh-start-server');
}

export default function Thornia96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-9-6-fresh-start-server" />;
}
