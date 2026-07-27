import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-low-exp-server-europe');
}

export default function DemolidoresLowExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-low-exp-server-europe" />;
}
