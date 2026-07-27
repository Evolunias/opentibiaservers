import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-europe');
}

export default function NostaltherPvpEnforcedServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-europe" />;
}
