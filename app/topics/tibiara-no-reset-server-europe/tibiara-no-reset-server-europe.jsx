import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-europe');
}

export default function TibiaraNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-europe" />;
}
