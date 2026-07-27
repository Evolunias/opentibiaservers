import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-latin-america');
}

export default function ArchlightNonPvpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-latin-america" />;
}
