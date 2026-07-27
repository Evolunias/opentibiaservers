import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-no-reset-server-france');
}

export default function ArcaniarlNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-no-reset-server-france" />;
}
