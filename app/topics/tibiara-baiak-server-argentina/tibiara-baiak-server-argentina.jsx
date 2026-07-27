import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-baiak-server-argentina');
}

export default function TibiaraBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-baiak-server-argentina" />;
}
