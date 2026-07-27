import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-forum');
}

export default function NoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-forum" />;
}
