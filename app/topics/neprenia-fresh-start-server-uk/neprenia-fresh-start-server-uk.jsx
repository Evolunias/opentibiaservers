import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-fresh-start-server-uk');
}

export default function NepreniaFreshStartServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-fresh-start-server-uk" />;
}
