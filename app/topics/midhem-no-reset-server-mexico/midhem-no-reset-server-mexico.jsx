import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-mexico');
}

export default function MidhemNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-mexico" />;
}
