import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-poland');
}

export default function NostaltherPvpEnforcedServerPolandKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-poland" />;
}
