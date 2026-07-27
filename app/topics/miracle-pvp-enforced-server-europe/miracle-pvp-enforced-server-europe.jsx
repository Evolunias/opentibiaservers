import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvp-enforced-server-europe');
}

export default function MiraclePvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvp-enforced-server-europe" />;
}
