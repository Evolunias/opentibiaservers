import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-poland');
}

export default function SaintsotRetroServerPolandKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-poland" />;
}
