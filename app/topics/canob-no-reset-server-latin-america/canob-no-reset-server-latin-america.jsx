import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-no-reset-server-latin-america');
}

export default function CanobNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="canob-no-reset-server-latin-america" />;
}
