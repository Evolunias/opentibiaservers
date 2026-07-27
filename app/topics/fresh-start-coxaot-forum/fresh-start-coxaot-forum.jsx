import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-forum');
}

export default function FreshStartCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-forum" />;
}
