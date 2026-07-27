import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-canada');
}

export default function ArchlightNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-canada" />;
}
