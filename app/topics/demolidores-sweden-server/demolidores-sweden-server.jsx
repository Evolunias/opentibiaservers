import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-sweden-server');
}

export default function DemolidoresSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="demolidores-sweden-server" />;
}
