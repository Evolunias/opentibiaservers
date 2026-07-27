import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-custom-map-servers-sweden');
}

export default function ClassicusCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="classicus-custom-map-servers-sweden" />;
}
