import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-nilot-open-tibia');
}

export default function CurrentNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="current-nilot-open-tibia" />;
}
