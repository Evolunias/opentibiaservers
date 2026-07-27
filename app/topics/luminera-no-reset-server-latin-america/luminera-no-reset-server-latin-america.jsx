import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-no-reset-server-latin-america');
}

export default function LumineraNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-no-reset-server-latin-america" />;
}
