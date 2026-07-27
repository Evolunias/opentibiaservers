import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-coxaot-forum');
}

export default function TopCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="top-coxaot-forum" />;
}
