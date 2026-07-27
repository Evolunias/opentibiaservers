import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-sweden-servers');
}

export default function RookgaardTalesSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-sweden-servers" />;
}
