import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-harmonia-ot-forum');
}

export default function LowrateHarmoniaOtForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-harmonia-ot-forum" />;
}
