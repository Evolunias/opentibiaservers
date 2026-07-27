import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-canada');
}

export default function DuraOnlinePvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-canada" />;
}
