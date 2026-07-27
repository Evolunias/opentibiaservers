import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-tibia');
}

export default function CustomZuneraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-tibia" />;
}
