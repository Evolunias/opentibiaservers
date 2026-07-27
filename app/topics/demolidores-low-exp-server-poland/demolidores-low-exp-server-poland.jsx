import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-low-exp-server-poland');
}

export default function DemolidoresLowExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-low-exp-server-poland" />;
}
