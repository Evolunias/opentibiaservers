import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-archlight-ot');
}

export default function NewSeasonArchlightOtKeywordPage() {
  return <StaticKeywordPage slug="new-season-archlight-ot" />;
}
