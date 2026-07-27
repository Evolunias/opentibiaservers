import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-forum');
}

export default function CustomHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-forum" />;
}
