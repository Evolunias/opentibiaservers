import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-open-tibia');
}

export default function OfficialSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-open-tibia" />;
}
