import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-luminera-forum');
}

export default function CustomLumineraForumKeywordPage() {
  return <StaticKeywordPage slug="custom-luminera-forum" />;
}
