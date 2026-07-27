import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-harmonia-ot-forum');
}

export default function NewSeasonHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-harmonia-ot-forum" />;
}
