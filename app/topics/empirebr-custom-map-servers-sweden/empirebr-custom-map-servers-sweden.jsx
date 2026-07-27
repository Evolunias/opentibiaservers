import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-custom-map-servers-sweden');
}

export default function EmpirebrCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-custom-map-servers-sweden" />;
}
