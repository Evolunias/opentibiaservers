import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-tibia');
}

export default function LowrateAureraGlobalTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-tibia" />;
}
