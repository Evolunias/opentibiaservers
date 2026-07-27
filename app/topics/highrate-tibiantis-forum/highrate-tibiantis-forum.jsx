import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-tibiantis-forum');
}

export default function HighrateTibiantisForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-tibiantis-forum" />;
}
