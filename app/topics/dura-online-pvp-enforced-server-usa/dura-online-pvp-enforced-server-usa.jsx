import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-enforced-server-usa');
}

export default function DuraOnlinePvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-enforced-server-usa" />;
}
