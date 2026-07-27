import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-13-pvp-server');
}

export default function MistOfDeath13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-13-pvp-server" />;
}
