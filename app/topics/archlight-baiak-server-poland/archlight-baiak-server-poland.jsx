import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-poland');
}

export default function ArchlightBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-poland" />;
}
