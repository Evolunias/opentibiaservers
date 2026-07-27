import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-saintsot-open-tibia');
}

export default function TopSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-saintsot-open-tibia" />;
}
