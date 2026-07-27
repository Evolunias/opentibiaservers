import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-argentina');
}

export default function UnlinePvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-argentina" />;
}
