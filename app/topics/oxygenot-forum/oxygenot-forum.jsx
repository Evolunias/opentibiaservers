import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-forum');
}

export default function OxygenotForumKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-forum" />;
}
