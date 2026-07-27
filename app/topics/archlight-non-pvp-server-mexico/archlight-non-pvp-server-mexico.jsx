import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-mexico');
}

export default function ArchlightNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-mexico" />;
}
