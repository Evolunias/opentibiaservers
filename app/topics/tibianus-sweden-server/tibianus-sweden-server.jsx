import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-sweden-server');
}

export default function TibianusSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="tibianus-sweden-server" />;
}
