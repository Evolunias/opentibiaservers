import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-forum');
}

export default function CustomCoxaotForumKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-forum" />;
}
