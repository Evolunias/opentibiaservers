import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-uk');
}

export default function TibiaraNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-uk" />;
}
