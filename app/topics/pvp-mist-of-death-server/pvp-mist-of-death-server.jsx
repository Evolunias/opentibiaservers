import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-mist-of-death-server');
}

export default function PvpMistOfDeathServerKeywordPage() {
  return <StaticKeywordPage slug="pvp-mist-of-death-server" />;
}
