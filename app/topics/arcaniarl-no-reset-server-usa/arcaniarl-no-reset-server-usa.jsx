import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-usa');
}

export default function ArcaniarlNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-usa" />;
}
