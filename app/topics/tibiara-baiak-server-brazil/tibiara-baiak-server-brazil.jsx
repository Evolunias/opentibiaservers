import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-brazil');
}

export default function TibiaraBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-brazil" />;
}
