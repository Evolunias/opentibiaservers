import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-no-reset-server-latin-america');
}

export default function SabrehavenNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-no-reset-server-latin-america" />;
}
