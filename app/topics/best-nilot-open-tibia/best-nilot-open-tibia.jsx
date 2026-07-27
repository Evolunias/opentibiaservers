import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-nilot-open-tibia');
}

export default function BestNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="best-nilot-open-tibia" />;
}
