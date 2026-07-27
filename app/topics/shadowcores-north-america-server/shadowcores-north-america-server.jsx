import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-north-america-server');
}

export default function ShadowcoresNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-north-america-server" />;
}
