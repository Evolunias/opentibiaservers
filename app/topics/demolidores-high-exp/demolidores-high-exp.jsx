import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-high-exp');
}

export default function DemolidoresHighExpKeywordPage() {
  return <StaticKeywordPage slug="demolidores-high-exp" />;
}
