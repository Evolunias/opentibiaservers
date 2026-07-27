import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-latin-america');
}

export default function TibiaraBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-latin-america" />;
}
