import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-15-pvp-server');
}

export default function MistOfDeath15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-15-pvp-server" />;
}
