import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-north-america');
}

export default function RealestaNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-north-america" />;
}
