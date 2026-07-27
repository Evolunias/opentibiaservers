import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-brazil');
}

export default function ShadowcoresBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-brazil" />;
}
