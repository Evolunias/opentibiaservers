import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-mexico');
}

export default function TibiaraBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-mexico" />;
}
