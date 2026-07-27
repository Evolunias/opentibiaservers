import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-chile-server');
}

export default function ShadowcoresChileServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-chile-server" />;
}
