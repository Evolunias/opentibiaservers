import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-empirebr-forum');
}

export default function LowrateEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-empirebr-forum" />;
}
