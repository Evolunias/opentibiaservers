import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ruthless-chaos-sweden-server');
}

export default function RuthlessChaosSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="ruthless-chaos-sweden-server" />;
}
