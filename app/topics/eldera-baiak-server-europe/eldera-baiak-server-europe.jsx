import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-europe');
}

export default function ElderaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-europe" />;
}
