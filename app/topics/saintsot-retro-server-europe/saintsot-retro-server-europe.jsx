import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-europe');
}

export default function SaintsotRetroServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-europe" />;
}
