import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-server');
}

export default function CurrentRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-server" />;
}
