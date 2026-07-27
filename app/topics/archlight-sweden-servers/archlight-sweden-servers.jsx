import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-sweden-servers');
}

export default function ArchlightSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-sweden-servers" />;
}
