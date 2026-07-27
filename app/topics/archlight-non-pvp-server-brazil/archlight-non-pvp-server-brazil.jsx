import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-brazil');
}

export default function ArchlightNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-brazil" />;
}
