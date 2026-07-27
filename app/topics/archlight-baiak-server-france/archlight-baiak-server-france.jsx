import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-baiak-server-france');
}

export default function ArchlightBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-baiak-server-france" />;
}
