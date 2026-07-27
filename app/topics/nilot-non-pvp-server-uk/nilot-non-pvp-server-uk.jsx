import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-non-pvp-server-uk');
}

export default function NilotNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-non-pvp-server-uk" />;
}
