import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-alastera-open-tibia');
}

export default function HighrateAlasteraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="highrate-alastera-open-tibia" />;
}
