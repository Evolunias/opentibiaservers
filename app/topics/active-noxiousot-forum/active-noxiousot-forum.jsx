import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-forum');
}

export default function ActiveNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-forum" />;
}
