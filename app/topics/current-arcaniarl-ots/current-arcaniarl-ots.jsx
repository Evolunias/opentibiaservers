import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-arcaniarl-ots');
}

export default function CurrentArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="current-arcaniarl-ots" />;
}
