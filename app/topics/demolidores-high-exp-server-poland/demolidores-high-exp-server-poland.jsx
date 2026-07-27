import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-high-exp-server-poland');
}

export default function DemolidoresHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="demolidores-high-exp-server-poland" />;
}
