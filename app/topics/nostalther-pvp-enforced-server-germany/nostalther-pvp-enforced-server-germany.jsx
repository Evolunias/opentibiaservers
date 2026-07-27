import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-enforced-server-germany');
}

export default function NostaltherPvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-enforced-server-germany" />;
}
