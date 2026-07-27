import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eternal-odyssey-forum');
}

export default function NoResetEternalOdysseyForumKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eternal-odyssey-forum" />;
}
