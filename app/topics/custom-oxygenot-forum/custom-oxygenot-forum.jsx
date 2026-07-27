import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-oxygenot-forum');
}

export default function CustomOxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="custom-oxygenot-forum" />;
}
