import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-nilot-open-tibia');
}

export default function FreshStartNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-nilot-open-tibia" />;
}
