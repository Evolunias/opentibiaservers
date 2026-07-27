import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-custom-map-servers-sweden');
}

export default function DemolidoresCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-custom-map-servers-sweden" />;
}
