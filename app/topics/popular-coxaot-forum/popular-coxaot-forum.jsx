import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-forum');
}

export default function PopularCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-forum" />;
}
