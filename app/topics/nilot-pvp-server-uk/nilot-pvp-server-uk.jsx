import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nilot-pvp-server-uk');
}

export default function NilotPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="nilot-pvp-server-uk" />;
}
