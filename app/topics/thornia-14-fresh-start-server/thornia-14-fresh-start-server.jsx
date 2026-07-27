import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-14-fresh-start-server');
}

export default function Thornia14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="thornia-14-fresh-start-server" />;
}
