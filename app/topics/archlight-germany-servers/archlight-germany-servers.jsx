import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-germany-servers');
}

export default function ArchlightGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="archlight-germany-servers" />;
}
