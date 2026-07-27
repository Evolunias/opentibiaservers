import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-empirebr-forum');
}

export default function NewEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="new-empirebr-forum" />;
}
