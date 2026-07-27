import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-8-1-non-pvp-server');
}

export default function MistOfDeath81NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-8-1-non-pvp-server" />;
}
