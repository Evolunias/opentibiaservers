import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-retro-server-south-america');
}

export default function SaintsotRetroServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-retro-server-south-america" />;
}
