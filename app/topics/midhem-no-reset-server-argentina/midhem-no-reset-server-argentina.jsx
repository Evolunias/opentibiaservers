import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-argentina');
}

export default function MidhemNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-argentina" />;
}
