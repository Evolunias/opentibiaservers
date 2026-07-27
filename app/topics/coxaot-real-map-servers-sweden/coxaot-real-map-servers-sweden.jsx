import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-real-map-servers-sweden');
}

export default function CoxaotRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-real-map-servers-sweden" />;
}
