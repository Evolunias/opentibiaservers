import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-usa');
}

export default function ArchlightPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-usa" />;
}
