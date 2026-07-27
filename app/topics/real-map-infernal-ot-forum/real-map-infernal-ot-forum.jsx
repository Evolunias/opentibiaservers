import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-forum');
}

export default function RealMapInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-forum" />;
}
