import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-high-exp-server-europe');
}

export default function DemolidoresHighExpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="demolidores-high-exp-server-europe" />;
}
