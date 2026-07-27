import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-tibia');
}

export default function SaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-tibia" />;
}
