import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-north-america');
}

export default function MidhemNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-north-america" />;
}
