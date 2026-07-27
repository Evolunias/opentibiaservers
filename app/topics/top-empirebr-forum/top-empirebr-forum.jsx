import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-empirebr-forum');
}

export default function TopEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="top-empirebr-forum" />;
}
