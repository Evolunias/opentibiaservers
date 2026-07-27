import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-ot-server');
}

export default function ArchlightOtServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-ot-server" />;
}
