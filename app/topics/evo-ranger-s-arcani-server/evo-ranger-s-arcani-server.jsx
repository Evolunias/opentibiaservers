import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ranger-s-arcani-server');
}

export default function EvoRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="evo-ranger-s-arcani-server" />;
}
