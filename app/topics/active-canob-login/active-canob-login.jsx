import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-login');
}

export default function ActiveCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="active-canob-login" />;
}
