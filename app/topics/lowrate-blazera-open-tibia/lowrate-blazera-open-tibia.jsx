import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-open-tibia');
}

export default function LowrateBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-open-tibia" />;
}
