import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-open-tibia');
}

export default function LowrateClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-open-tibia" />;
}
