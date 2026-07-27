import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-ots');
}

export default function NoResetArcaniarlOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-ots" />;
}
