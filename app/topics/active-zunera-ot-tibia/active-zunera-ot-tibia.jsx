import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-tibia');
}

export default function ActiveZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-tibia" />;
}
