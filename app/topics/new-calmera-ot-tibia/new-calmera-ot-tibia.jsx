import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-tibia');
}

export default function NewCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-tibia" />;
}
