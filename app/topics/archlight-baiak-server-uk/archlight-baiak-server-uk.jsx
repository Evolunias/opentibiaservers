import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-uk');
}

export default function ArchlightBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-uk" />;
}
