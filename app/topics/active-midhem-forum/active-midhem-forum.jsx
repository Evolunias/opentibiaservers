import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-midhem-forum');
}

export default function ActiveMidhemForumKeywordPage() {
  return <StaticKeywordPage slug="active-midhem-forum" />;
}
