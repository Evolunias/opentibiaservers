import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-open-tibia');
}

export default function NewSeasonArchlightOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-open-tibia" />;
}
