import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-mexico');
}

export default function MistOfDeathNonPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-mexico" />;
}
