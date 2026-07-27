import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-harmonia-ot-forum');
}

export default function HighrateHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-harmonia-ot-forum" />;
}
