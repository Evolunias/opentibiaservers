import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-north-america');
}

export default function SaintsotRetroServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-north-america" />;
}
