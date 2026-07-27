import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-pvp-server-uk');
}

export default function NostaltherPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="nostalther-pvp-server-uk" />;
}
