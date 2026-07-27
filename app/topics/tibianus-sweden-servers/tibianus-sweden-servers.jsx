import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-sweden-servers');
}

export default function TibianusSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="tibianus-sweden-servers" />;
}
