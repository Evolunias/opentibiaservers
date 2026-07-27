import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-uk');
}

export default function TibiantisLowExpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-uk" />;
}
