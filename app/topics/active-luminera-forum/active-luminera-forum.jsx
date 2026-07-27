import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-luminera-forum');
}

export default function ActiveLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="active-luminera-forum" />;
}
