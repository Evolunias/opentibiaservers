import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-low-exp-server-france');
}

export default function ArcaniarlLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-low-exp-server-france" />;
}
