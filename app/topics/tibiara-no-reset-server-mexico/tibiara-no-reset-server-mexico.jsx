import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-mexico');
}

export default function TibiaraNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-mexico" />;
}
