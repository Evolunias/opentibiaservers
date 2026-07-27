import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-login');
}

export default function CurrentArcaniarlLoginKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-login" />;
}
