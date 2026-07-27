import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-private-server');
}

export default function PopularEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-private-server" />;
}
