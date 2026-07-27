import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-mexico');
}

export default function SaintsotRetroServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-mexico" />;
}
