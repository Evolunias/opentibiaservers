import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-poland');
}

export default function ArcaniarlNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-poland" />;
}
