import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-south-america');
}

export default function MidhemNoResetServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-south-america" />;
}
