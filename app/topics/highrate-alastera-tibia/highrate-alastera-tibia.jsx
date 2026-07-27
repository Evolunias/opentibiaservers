import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-tibia');
}

export default function HighrateAlasteraTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-tibia" />;
}
