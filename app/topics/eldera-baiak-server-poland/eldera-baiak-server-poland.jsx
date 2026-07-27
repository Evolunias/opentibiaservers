import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-baiak-server-poland');
}

export default function ElderaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-baiak-server-poland" />;
}
