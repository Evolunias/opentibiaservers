import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-pvp-server-latin-america');
}

export default function ArchlightPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-pvp-server-latin-america" />;
}
