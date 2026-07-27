import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-open-tibia');
}

export default function LowrateUnlineOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-open-tibia" />;
}
