import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-high-exp-server-north-america');
}

export default function DemolidoresHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-high-exp-server-north-america" />;
}
