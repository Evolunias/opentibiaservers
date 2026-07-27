import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-server');
}

export default function CustomCanobServerKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-server" />;
}
