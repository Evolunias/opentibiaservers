import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-neprenia-tibia');
}

export default function HighrateNepreniaTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-neprenia-tibia" />;
}
