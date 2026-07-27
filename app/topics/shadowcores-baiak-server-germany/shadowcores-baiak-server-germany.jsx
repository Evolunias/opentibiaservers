import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-germany');
}

export default function ShadowcoresBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-germany" />;
}
