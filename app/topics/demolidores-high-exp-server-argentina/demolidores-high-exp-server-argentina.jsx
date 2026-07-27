import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-high-exp-server-argentina');
}

export default function DemolidoresHighExpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-high-exp-server-argentina" />;
}
