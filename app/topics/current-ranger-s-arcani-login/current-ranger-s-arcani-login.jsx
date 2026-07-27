import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-login');
}

export default function CurrentRangerSArcaniLoginKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-login" />;
}
