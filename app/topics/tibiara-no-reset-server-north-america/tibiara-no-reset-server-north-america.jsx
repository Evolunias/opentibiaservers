import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-north-america');
}

export default function TibiaraNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-north-america" />;
}
