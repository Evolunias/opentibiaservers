import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-north-america');
}

export default function ShadowcoresBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-north-america" />;
}
