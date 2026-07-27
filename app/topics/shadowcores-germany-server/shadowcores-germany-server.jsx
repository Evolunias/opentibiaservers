import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-germany-server');
}

export default function ShadowcoresGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-germany-server" />;
}
