import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-midhem-forum');
}

export default function LowrateMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="lowrate-midhem-forum" />;
}
