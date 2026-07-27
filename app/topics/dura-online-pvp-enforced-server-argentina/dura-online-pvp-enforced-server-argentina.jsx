import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('dura-online-pvp-enforced-server-argentina');
}

export default function DuraOnlinePvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="dura-online-pvp-enforced-server-argentina" />;
}
