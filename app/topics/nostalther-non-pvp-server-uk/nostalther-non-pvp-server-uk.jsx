import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-non-pvp-server-uk');
}

export default function NostaltherNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-non-pvp-server-uk" />;
}
