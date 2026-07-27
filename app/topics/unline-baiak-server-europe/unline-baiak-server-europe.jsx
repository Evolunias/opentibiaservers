import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-baiak-server-europe');
}

export default function UnlineBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="unline-baiak-server-europe" />;
}
