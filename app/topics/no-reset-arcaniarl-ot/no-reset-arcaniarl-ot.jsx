import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-ot');
}

export default function NoResetArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-ot" />;
}
