import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-empirebr-forum');
}

export default function HighrateEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-empirebr-forum" />;
}
