import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-sweden-servers');
}

export default function DemolidoresSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="demolidores-sweden-servers" />;
}
