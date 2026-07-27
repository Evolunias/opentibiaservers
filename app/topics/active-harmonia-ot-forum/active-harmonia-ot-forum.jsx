import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-forum');
}

export default function ActiveHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-forum" />;
}
