import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-14-pvp-server');
}

export default function MistOfDeath14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-14-pvp-server" />;
}
