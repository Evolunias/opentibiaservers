import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-tibia');
}

export default function TopSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-tibia" />;
}
