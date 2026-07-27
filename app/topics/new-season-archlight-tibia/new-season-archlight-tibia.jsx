import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-tibia');
}

export default function NewSeasonArchlightTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-tibia" />;
}
