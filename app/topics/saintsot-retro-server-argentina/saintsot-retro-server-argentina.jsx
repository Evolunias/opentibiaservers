import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-argentina');
}

export default function SaintsotRetroServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-argentina" />;
}
