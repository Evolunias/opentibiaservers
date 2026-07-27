import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-uk');
}

export default function SaintsotRetroServerUkKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-uk" />;
}
