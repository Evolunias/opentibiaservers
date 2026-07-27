import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-low-exp-server-north-america');
}

export default function DemolidoresLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-low-exp-server-north-america" />;
}
