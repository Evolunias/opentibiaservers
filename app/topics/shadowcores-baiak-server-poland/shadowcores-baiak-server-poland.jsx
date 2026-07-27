import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-poland');
}

export default function ShadowcoresBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-poland" />;
}
