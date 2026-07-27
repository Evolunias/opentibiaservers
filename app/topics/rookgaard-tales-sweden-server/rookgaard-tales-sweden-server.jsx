import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rookgaard-tales-sweden-server');
}

export default function RookgaardTalesSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="rookgaard-tales-sweden-server" />;
}
