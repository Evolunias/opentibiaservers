import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-open-tibia');
}

export default function NewCalmeraOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-open-tibia" />;
}
