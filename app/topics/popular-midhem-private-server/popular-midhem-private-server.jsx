import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-private-server');
}

export default function PopularMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-private-server" />;
}
