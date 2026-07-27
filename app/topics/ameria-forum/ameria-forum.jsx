import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-forum');
}

export default function AmeriaForumKeywordPage() {
  return <StaticKeywordPage slug="ameria-forum" />;
}
