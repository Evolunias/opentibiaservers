import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-forum');
}

export default function EmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="empirebr-forum" />;
}
