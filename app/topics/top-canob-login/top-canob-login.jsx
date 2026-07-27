import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-login');
}

export default function TopCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="top-canob-login" />;
}
