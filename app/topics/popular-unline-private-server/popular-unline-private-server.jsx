import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-private-server');
}

export default function PopularUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-private-server" />;
}
