import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-server');
}

export default function ActiveCanobServerKeywordPage() {
  return <StaticKeywordPage slug="active-canob-server" />;
}
