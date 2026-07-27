import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-north-america-servers');
}

export default function ShadowcoresNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-north-america-servers" />;
}
