import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-open-tibia');
}

export default function OfficialNilotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-open-tibia" />;
}
