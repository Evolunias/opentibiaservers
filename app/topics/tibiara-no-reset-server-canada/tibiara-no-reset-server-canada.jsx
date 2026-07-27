import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-canada');
}

export default function TibiaraNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-canada" />;
}
