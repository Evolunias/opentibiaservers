import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-high-exp-server-france');
}

export default function ArcaniarlHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-high-exp-server-france" />;
}
