import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-france');
}

export default function SaintsotRetroServerFranceKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-france" />;
}
