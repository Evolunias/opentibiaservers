import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-latin-america-servers');
}

export default function ShadowcoresLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-latin-america-servers" />;
}
