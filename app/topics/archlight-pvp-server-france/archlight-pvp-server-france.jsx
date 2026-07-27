import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-france');
}

export default function ArchlightPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-france" />;
}
