import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-empirebr-forum');
}

export default function NewSeasonEmpirebrForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-empirebr-forum" />;
}
