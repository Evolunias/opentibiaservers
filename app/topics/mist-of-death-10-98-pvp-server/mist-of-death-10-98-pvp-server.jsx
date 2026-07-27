import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-10-98-pvp-server');
}

export default function MistOfDeath1098PvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-10-98-pvp-server" />;
}
