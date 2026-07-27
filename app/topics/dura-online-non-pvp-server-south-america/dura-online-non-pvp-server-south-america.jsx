import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-non-pvp-server-south-america');
}

export default function DuraOnlineNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-non-pvp-server-south-america" />;
}
