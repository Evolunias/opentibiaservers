import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-arcaniarl-ots');
}

export default function TopArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="top-arcaniarl-ots" />;
}
