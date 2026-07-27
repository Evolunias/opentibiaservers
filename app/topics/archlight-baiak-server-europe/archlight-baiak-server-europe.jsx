import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-europe');
}

export default function ArchlightBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-europe" />;
}
