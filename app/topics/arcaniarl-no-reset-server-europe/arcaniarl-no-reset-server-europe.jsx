import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-europe');
}

export default function ArcaniarlNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-europe" />;
}
