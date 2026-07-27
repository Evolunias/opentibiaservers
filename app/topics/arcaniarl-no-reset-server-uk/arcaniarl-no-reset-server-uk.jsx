import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-uk');
}

export default function ArcaniarlNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-uk" />;
}
