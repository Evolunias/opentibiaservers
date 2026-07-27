import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-forum');
}

export default function CurrentHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-forum" />;
}
