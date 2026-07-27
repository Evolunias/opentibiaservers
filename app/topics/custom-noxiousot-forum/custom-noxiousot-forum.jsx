import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-forum');
}

export default function CustomNoxiousotForumKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-forum" />;
}
