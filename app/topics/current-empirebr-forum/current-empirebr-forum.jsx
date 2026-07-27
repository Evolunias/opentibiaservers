import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-empirebr-forum');
}

export default function CurrentEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="current-empirebr-forum" />;
}
