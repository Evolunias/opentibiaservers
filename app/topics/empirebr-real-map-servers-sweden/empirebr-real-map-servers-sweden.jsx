import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('empirebr-real-map-servers-sweden');
}

export default function EmpirebrRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="empirebr-real-map-servers-sweden" />;
}
