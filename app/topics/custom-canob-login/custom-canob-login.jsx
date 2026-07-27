import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-login');
}

export default function CustomCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-login" />;
}
