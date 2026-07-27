import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-midhem-forum');
}

export default function HighrateMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="highrate-midhem-forum" />;
}
