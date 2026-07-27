import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-client');
}

export default function ArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="archlight-client" />;
}
