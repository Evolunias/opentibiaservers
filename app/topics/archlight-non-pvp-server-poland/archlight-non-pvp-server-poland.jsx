import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('archlight-non-pvp-server-poland');
}

export default function ArchlightNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="archlight-non-pvp-server-poland" />;
}
