import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-canob-login');
}

export default function FreshStartCanobLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-canob-login" />;
}
