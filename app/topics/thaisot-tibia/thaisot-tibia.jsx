import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-tibia');
}

export default function ThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-tibia" />;
}
