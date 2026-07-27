import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-medivia-open-tibia');
}

export default function CustomMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="custom-medivia-open-tibia" />;
}
