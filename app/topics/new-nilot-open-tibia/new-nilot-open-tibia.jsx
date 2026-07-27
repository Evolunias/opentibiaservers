import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-nilot-open-tibia');
}

export default function NewNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-nilot-open-tibia" />;
}
