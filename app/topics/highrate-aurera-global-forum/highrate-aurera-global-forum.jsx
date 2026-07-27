import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-aurera-global-forum');
}

export default function HighrateAureraGlobalForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-aurera-global-forum" />;
}
