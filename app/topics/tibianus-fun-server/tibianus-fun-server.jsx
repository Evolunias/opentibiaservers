import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-fun-server');
}

export default function TibianusFunServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-fun-server" />;
}
