import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-4-non-pvp-server');
}

export default function MistOfDeath84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-4-non-pvp-server" />;
}
