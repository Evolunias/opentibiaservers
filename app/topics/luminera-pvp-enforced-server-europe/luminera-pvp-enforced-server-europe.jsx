import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-pvp-enforced-server-europe');
}

export default function LumineraPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="luminera-pvp-enforced-server-europe" />;
}
