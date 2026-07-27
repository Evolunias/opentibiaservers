import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-high-exp-server-germany');
}

export default function TibiantisHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-high-exp-server-germany" />;
}
