import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-12-pvp-server');
}

export default function MistOfDeath12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-12-pvp-server" />;
}
