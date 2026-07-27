import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-forum');
}

export default function FreshStartHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-forum" />;
}
