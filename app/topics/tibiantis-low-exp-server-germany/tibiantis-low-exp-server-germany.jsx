import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-low-exp-server-germany');
}

export default function TibiantisLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-low-exp-server-germany" />;
}
