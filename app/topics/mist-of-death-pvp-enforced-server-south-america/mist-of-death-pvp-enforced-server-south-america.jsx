import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-enforced-server-south-america');
}

export default function MistOfDeathPvpEnforcedServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-enforced-server-south-america" />;
}
