import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-saintsot-tibia');
}

export default function OfficialSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-saintsot-tibia" />;
}
