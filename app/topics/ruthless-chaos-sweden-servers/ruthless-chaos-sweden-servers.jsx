import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-sweden-servers');
}

export default function RuthlessChaosSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-sweden-servers" />;
}
