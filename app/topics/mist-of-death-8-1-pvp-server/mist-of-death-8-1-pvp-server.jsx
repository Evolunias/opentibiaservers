import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-1-pvp-server');
}

export default function MistOfDeath81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-1-pvp-server" />;
}
