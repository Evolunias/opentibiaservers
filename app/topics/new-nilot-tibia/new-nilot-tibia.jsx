import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-tibia');
}

export default function NewNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-tibia" />;
}
