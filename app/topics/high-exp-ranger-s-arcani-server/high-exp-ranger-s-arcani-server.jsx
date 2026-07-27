import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-ranger-s-arcani-server');
}

export default function HighExpRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="high-exp-ranger-s-arcani-server" />;
}
