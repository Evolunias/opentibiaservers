import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-low-exp-server-argentina');
}

export default function DemolidoresLowExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-low-exp-server-argentina" />;
}
