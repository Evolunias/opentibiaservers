import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-medivia-open-tibia');
}

export default function CurrentMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-medivia-open-tibia" />;
}
