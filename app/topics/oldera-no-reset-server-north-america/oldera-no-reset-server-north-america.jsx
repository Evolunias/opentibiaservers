import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oldera-no-reset-server-north-america');
}

export default function OlderaNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="oldera-no-reset-server-north-america" />;
}
