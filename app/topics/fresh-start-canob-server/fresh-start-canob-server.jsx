import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-server');
}

export default function FreshStartCanobServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-server" />;
}
