import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-high-exp-server-france');
}

export default function DemolidoresHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-high-exp-server-france" />;
}
