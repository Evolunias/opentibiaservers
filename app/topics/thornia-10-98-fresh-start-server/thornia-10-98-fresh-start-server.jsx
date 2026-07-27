import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-10-98-fresh-start-server');
}

export default function Thornia1098FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-10-98-fresh-start-server" />;
}
