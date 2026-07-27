import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-11-pvp-server');
}

export default function MistOfDeath11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-11-pvp-server" />;
}
