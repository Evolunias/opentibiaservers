import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-open-tibia');
}

export default function ThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="thaisot-open-tibia" />;
}
