import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-enforced-server-latin-america');
}

export default function DuraOnlinePvpEnforcedServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-enforced-server-latin-america" />;
}
