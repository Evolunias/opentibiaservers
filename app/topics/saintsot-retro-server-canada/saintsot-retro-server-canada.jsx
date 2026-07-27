import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-canada');
}

export default function SaintsotRetroServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-canada" />;
}
