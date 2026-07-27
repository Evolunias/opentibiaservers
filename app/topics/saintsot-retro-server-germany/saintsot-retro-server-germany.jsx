import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-germany');
}

export default function SaintsotRetroServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-germany" />;
}
