import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-canada');
}

export default function ArcaniarlNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-canada" />;
}
