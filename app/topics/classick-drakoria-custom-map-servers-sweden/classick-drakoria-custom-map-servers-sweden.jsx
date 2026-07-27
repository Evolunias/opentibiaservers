import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-custom-map-servers-sweden');
}

export default function ClassickDrakoriaCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-custom-map-servers-sweden" />;
}
