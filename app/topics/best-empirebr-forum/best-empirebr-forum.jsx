import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-empirebr-forum');
}

export default function BestEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="best-empirebr-forum" />;
}
