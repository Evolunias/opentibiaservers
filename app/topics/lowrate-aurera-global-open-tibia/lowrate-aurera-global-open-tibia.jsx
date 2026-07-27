import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-aurera-global-open-tibia');
}

export default function LowrateAureraGlobalOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-aurera-global-open-tibia" />;
}
