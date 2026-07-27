import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-eternal-odyssey-forum');
}

export default function CustomEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="custom-eternal-odyssey-forum" />;
}
