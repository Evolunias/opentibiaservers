import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-no-reset-server-latin-america');
}

export default function ThorniaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-no-reset-server-latin-america" />;
}
