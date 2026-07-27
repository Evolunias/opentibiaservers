import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani');
}

export default function CurrentRangerSArcaniKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani" />;
}
