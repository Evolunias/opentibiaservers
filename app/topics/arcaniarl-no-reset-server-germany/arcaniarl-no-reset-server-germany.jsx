import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-germany');
}

export default function ArcaniarlNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-germany" />;
}
