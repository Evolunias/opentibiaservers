import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-pvp-enforced-server-usa');
}

export default function UnlinePvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="unline-pvp-enforced-server-usa" />;
}
