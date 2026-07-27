import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-empirebr-forum');
}

export default function FreshStartEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-empirebr-forum" />;
}
