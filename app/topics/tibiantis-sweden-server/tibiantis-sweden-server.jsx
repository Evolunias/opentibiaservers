import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-sweden-server');
}

export default function TibiantisSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-sweden-server" />;
}
