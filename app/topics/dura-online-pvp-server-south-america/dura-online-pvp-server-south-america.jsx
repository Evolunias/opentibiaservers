import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-south-america');
}

export default function DuraOnlinePvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-south-america" />;
}
