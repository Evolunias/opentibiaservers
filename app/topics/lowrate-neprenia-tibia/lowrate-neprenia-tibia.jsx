import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-tibia');
}

export default function LowrateNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-tibia" />;
}
