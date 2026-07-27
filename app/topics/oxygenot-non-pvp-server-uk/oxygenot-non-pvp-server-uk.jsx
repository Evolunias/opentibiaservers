import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-non-pvp-server-uk');
}

export default function OxygenotNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-non-pvp-server-uk" />;
}
