import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-open-tibia');
}

export default function CustomZuneraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-open-tibia" />;
}
