import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-forum');
}

export default function PopularHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-forum" />;
}
