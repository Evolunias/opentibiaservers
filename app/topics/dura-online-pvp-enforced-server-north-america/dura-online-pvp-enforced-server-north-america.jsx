import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-enforced-server-north-america');
}

export default function DuraOnlinePvpEnforcedServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-enforced-server-north-america" />;
}
