import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-canada-server');
}

export default function ShadowcoresCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-canada-server" />;
}
