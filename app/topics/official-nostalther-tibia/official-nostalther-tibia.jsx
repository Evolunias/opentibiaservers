import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-tibia');
}

export default function OfficialNostaltherTibiaKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-tibia" />;
}
