import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-server');
}

export default function TopCanobServerKeywordPage() {
  return <StaticKeywordPage slug="top-canob-server" />;
}
