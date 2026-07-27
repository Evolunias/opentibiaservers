import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-north-america');
}

export default function RealeraNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-north-america" />;
}
