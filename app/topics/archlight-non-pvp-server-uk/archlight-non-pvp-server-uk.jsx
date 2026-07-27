import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-uk');
}

export default function ArchlightNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-uk" />;
}
