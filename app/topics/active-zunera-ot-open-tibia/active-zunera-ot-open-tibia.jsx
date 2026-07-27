import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-open-tibia');
}

export default function ActiveZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-open-tibia" />;
}
