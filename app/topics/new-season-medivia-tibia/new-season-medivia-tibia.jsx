import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-medivia-tibia');
}

export default function NewSeasonMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-medivia-tibia" />;
}
