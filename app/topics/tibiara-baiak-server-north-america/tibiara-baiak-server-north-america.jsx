import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-north-america');
}

export default function TibiaraBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-north-america" />;
}
