import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-usa');
}

export default function TibiaraNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-usa" />;
}
