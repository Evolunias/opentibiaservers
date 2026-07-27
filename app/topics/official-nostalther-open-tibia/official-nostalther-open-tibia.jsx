import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-open-tibia');
}

export default function OfficialNostaltherOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-open-tibia" />;
}
