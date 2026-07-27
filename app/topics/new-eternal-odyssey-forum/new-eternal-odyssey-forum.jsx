import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-eternal-odyssey-forum');
}

export default function NewEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="new-eternal-odyssey-forum" />;
}
