import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-noxiousot-forum');
}

export default function NewSeasonNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="new-season-noxiousot-forum" />;
}
