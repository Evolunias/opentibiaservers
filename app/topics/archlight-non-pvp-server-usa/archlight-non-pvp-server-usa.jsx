import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-usa');
}

export default function ArchlightNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-usa" />;
}
