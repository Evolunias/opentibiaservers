import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-brazil');
}

export default function SaintsotRetroServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-brazil" />;
}
