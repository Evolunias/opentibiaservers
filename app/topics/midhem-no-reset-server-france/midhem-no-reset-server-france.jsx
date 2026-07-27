import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-france');
}

export default function MidhemNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-france" />;
}
