import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-pvp-server-uk');
}

export default function TibiantisPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-pvp-server-uk" />;
}
