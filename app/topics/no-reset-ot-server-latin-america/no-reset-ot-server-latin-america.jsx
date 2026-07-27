import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ot-server-latin-america');
}

export default function NoResetOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ot-server-latin-america" />;
}
