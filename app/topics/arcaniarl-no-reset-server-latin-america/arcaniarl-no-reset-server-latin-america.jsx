import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-latin-america');
}

export default function ArcaniarlNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-latin-america" />;
}
