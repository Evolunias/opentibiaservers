import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-realesta-open-tibia');
}

export default function LowrateRealestaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-realesta-open-tibia" />;
}
