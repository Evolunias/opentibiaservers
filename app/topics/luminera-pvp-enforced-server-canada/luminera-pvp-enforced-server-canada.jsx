import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-canada');
}

export default function LumineraPvpEnforcedServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-canada" />;
}
