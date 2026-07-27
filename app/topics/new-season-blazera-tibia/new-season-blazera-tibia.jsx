import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-blazera-tibia');
}

export default function NewSeasonBlazeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-blazera-tibia" />;
}
