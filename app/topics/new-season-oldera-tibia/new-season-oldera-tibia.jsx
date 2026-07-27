import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-oldera-tibia');
}

export default function NewSeasonOlderaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-oldera-tibia" />;
}
