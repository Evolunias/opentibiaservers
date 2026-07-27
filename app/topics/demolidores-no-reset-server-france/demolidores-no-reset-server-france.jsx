import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-no-reset-server-france');
}

export default function DemolidoresNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="demolidores-no-reset-server-france" />;
}
