import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-germany');
}

export default function DuraOnlinePvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-germany" />;
}
