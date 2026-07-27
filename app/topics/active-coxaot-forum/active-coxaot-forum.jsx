import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-coxaot-forum');
}

export default function ActiveCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="active-coxaot-forum" />;
}
