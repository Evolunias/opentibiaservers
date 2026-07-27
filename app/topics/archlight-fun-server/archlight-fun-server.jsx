import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-fun-server');
}

export default function ArchlightFunServerKeywordPage() {
  return <StaticKeywordPage slug="archlight-fun-server" />;
}
