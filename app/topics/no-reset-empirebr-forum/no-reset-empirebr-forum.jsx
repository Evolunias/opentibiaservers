import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-empirebr-forum');
}

export default function NoResetEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-empirebr-forum" />;
}
