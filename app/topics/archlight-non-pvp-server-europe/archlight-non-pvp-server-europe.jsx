import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-europe');
}

export default function ArchlightNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-europe" />;
}
