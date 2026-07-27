import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-no-reset-server-north-america');
}

export default function OriginaltibiaNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-no-reset-server-north-america" />;
}
