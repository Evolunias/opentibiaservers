import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-tibia');
}

export default function TopNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-tibia" />;
}
