import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-usa');
}

export default function TibiaraBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-usa" />;
}
