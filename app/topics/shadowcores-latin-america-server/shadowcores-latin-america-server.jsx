import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-latin-america-server');
}

export default function ShadowcoresLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-latin-america-server" />;
}
