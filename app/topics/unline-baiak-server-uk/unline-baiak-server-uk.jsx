import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-uk');
}

export default function UnlineBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-uk" />;
}
