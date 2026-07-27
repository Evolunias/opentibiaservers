import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-north-america');
}

export default function ArcaniarlNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-north-america" />;
}
