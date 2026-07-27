import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-low-exp-server-france');
}

export default function DemolidoresLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-low-exp-server-france" />;
}
