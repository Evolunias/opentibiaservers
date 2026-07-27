import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-uk');
}

export default function NostaltherPvpEnforcedServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-uk" />;
}
