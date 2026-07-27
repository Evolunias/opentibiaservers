import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-sweden-servers');
}

export default function ShadowcoresSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-sweden-servers" />;
}
