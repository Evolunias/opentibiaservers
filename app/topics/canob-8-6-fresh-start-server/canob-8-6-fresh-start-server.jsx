import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-6-fresh-start-server');
}

export default function Canob86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-6-fresh-start-server" />;
}
