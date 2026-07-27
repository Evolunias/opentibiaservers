import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-medivia-open-tibia');
}

export default function LowrateMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-medivia-open-tibia" />;
}
