import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-6-pvp-server');
}

export default function MistOfDeath86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-6-pvp-server" />;
}
