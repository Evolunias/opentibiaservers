import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-forum');
}

export default function NewNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-forum" />;
}
