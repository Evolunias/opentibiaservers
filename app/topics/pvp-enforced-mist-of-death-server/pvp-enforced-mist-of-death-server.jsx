import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-mist-of-death-server');
}

export default function PvpEnforcedMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-mist-of-death-server" />;
}
