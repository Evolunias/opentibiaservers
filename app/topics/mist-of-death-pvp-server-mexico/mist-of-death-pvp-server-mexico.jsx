import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-server-mexico');
}

export default function MistOfDeathPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-server-mexico" />;
}
