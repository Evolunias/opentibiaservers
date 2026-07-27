import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-forum');
}

export default function OtlandServerGalaForumKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-forum" />;
}
