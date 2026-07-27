import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nilot-tibia');
}

export default function OfficialNilotTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-nilot-tibia" />;
}
