import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('coxaot-custom-map-servers-sweden');
}

export default function CoxaotCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="coxaot-custom-map-servers-sweden" />;
}
