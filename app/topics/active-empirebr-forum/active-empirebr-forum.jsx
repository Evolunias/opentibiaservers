import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-empirebr-forum');
}

export default function ActiveEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="active-empirebr-forum" />;
}
