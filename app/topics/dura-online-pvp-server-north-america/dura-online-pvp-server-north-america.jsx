import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-server-north-america');
}

export default function DuraOnlinePvpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-server-north-america" />;
}
