import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('demolidores-no-reset-server-latin-america');
}

export default function DemolidoresNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="demolidores-no-reset-server-latin-america" />;
}
