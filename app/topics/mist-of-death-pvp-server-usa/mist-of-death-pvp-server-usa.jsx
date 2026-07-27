import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-server-usa');
}

export default function MistOfDeathPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-server-usa" />;
}
