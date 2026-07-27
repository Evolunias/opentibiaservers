import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-forum');
}

export default function CoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="coxaot-forum" />;
}
