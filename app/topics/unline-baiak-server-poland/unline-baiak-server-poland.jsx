import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-poland');
}

export default function UnlineBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-poland" />;
}
