import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('infernal-ot-forum');
}

export default function InfernalOtForumKeywordPage() {
  return <StaticKeywordPage slug="infernal-ot-forum" />;
}
