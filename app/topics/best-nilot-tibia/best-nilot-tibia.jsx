import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-tibia');
}

export default function BestNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-tibia" />;
}
