import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-ranger-s-arcani-server');
}

export default function LowExpRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="low-exp-ranger-s-arcani-server" />;
}
