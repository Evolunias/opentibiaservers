import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-sweden-server');
}

export default function ClassicusSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="classicus-sweden-server" />;
}
