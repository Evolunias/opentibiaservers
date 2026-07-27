import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-fresh-start-server');
}

export default function Canob14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-fresh-start-server" />;
}
