import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-usa');
}

export default function MidhemNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-usa" />;
}
