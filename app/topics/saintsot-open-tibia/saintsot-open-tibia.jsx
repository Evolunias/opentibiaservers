import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-open-tibia');
}

export default function SaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="saintsot-open-tibia" />;
}
