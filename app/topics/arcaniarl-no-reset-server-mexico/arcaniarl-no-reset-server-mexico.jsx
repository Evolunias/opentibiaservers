import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-mexico');
}

export default function ArcaniarlNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-mexico" />;
}
