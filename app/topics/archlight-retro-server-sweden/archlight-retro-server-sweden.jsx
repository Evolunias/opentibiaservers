import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-retro-server-sweden');
}

export default function ArchlightRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="archlight-retro-server-sweden" />;
}
