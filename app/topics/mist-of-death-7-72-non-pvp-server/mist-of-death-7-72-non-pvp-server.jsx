import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-72-non-pvp-server');
}

export default function MistOfDeath772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-72-non-pvp-server" />;
}
