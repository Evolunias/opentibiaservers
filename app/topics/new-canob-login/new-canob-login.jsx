import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-canob-login');
}

export default function NewCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="new-canob-login" />;
}
