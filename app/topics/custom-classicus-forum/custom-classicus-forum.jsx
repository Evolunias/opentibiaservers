import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-forum');
}

export default function CustomClassicusForumKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-forum" />;
}
