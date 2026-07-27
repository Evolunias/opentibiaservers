import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-non-pvp-server-uk');
}

export default function TibiantisNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-non-pvp-server-uk" />;
}
