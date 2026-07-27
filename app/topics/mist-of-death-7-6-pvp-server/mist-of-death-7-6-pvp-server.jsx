import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-6-pvp-server');
}

export default function MistOfDeath76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-6-pvp-server" />;
}
