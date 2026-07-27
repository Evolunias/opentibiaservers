import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-infernal-ot-forum');
}

export default function NewInfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="new-infernal-ot-forum" />;
}
