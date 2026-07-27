import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('mist-of-death-pvp-server-uk');
}

export default function MistOfDeathPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="mist-of-death-pvp-server-uk" />;
}
