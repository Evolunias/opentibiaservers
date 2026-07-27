import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-ranger-s-arcani-servers');
}

export default function EvoRangerSArcaniServersKeywordPage() {
  return <StaticKeywordPage slug="evo-ranger-s-arcani-servers" />;
}
