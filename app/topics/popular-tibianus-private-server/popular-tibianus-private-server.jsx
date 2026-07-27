import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibianus-private-server');
}

export default function PopularTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibianus-private-server" />;
}
