import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-empirebr-forum');
}

export default function OfficialEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="official-empirebr-forum" />;
}
