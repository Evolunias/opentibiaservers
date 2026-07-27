import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-poland');
}

export default function MidhemNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-poland" />;
}
