import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realera-open-tibia');
}

export default function LowrateRealeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realera-open-tibia" />;
}
