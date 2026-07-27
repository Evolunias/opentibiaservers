import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-low-exp-server-uk');
}

export default function NepreniaLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="neprenia-low-exp-server-uk" />;
}
