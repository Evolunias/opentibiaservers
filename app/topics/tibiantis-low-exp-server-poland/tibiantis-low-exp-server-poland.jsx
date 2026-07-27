import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-poland');
}

export default function TibiantisLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-poland" />;
}
