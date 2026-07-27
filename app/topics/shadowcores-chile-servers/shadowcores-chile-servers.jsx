import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-chile-servers');
}

export default function ShadowcoresChileServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-chile-servers" />;
}
