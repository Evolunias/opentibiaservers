import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-europe');
}

export default function TibiantisLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-europe" />;
}
