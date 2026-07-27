import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-nilot-open-tibia');
}

export default function TopNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="top-nilot-open-tibia" />;
}
