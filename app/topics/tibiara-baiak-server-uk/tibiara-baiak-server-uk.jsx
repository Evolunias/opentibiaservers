import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-uk');
}

export default function TibiaraBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-uk" />;
}
