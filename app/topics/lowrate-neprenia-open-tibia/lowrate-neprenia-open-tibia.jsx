import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-open-tibia');
}

export default function LowrateNepreniaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-open-tibia" />;
}
