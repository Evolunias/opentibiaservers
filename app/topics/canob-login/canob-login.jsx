import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-login');
}

export default function CanobLoginKeywordPage() {
  return <StaticKeywordPage slug="canob-login" />;
}
