import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-forum');
}

export default function OfficialHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-forum" />;
}
