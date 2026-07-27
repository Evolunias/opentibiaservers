import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-low-exp-server-germany');
}

export default function DemolidoresLowExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="demolidores-low-exp-server-germany" />;
}
