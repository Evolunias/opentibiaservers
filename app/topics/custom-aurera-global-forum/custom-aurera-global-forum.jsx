import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-aurera-global-forum');
}

export default function CustomAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="custom-aurera-global-forum" />;
}
