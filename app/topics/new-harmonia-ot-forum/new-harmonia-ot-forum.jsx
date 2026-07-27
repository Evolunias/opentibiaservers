import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-harmonia-ot-forum');
}

export default function NewHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="new-harmonia-ot-forum" />;
}
