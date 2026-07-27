import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-latin-america');
}

export default function RealestaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-latin-america" />;
}
