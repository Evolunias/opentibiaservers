import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-usa');
}

export default function SaintsotRetroServerUsaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-usa" />;
}
