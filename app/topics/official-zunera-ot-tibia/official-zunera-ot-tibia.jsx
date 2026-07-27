import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-zunera-ot-tibia');
}

export default function OfficialZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-zunera-ot-tibia" />;
}
