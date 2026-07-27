import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-france');
}

export default function ArchlightNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-france" />;
}
