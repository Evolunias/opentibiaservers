import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-enforced-server-usa');
}

export default function MiraclePvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-enforced-server-usa" />;
}
