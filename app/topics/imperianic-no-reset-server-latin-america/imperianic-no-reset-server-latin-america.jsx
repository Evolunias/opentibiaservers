import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-no-reset-server-latin-america');
}

export default function ImperianicNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-no-reset-server-latin-america" />;
}
