import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-canada-servers');
}

export default function ShadowcoresCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-canada-servers" />;
}
