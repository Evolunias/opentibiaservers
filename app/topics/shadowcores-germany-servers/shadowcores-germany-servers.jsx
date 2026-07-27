import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-germany-servers');
}

export default function ShadowcoresGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-germany-servers" />;
}
