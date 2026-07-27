import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-high-exp-server-uk');
}

export default function TibiantisHighExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-high-exp-server-uk" />;
}
