import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-7-4-pvp-server');
}

export default function MistOfDeath74PvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-7-4-pvp-server" />;
}
