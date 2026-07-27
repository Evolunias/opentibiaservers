import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('shadowcores-baiak-server-uk');
}

export default function ShadowcoresBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="shadowcores-baiak-server-uk" />;
}
