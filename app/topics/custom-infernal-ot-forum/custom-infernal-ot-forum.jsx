import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-infernal-ot-forum');
}

export default function CustomInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="custom-infernal-ot-forum" />;
}
