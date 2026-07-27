import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-9-6-pvp-server');
}

export default function MistOfDeath96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-9-6-pvp-server" />;
}
