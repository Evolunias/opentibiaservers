import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-empirebr-forum');
}

export default function PopularEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="popular-empirebr-forum" />;
}
