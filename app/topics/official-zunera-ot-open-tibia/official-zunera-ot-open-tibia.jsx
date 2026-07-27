import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-open-tibia');
}

export default function OfficialZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-open-tibia" />;
}
