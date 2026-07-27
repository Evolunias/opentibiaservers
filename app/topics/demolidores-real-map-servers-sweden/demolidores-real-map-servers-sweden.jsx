import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-real-map-servers-sweden');
}

export default function DemolidoresRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="demolidores-real-map-servers-sweden" />;
}
