import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-poland');
}

export default function TibiaraBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-poland" />;
}
