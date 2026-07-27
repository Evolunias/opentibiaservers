import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-argentina-servers');
}

export default function ArchlightArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-argentina-servers" />;
}
