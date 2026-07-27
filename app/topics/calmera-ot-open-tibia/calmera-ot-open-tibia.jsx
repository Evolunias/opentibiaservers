import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-open-tibia');
}

export default function CalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-open-tibia" />;
}
