import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-harmonia-ot-forum');
}

export default function BestHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="best-harmonia-ot-forum" />;
}
