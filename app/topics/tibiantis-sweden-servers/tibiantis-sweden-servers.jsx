import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-sweden-servers');
}

export default function TibiantisSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-sweden-servers" />;
}
