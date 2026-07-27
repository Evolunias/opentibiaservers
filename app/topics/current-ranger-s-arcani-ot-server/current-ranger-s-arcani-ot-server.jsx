import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ranger-s-arcani-ot-server');
}

export default function CurrentRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-ranger-s-arcani-ot-server" />;
}
