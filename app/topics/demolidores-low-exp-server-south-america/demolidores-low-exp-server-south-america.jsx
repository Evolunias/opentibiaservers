import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-low-exp-server-south-america');
}

export default function DemolidoresLowExpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-low-exp-server-south-america" />;
}
