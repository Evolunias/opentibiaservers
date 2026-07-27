import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-non-pvp-server-uk');
}

export default function MistOfDeathNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-non-pvp-server-uk" />;
}
