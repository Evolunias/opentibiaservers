import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-high-exp-server-uk');
}

export default function NepreniaHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-high-exp-server-uk" />;
}
