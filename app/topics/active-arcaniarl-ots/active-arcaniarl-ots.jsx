import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-arcaniarl-ots');
}

export default function ActiveArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="active-arcaniarl-ots" />;
}
