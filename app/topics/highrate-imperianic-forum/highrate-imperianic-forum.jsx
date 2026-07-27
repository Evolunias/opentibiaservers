import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-imperianic-forum');
}

export default function HighrateImperianicForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-imperianic-forum" />;
}
