import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-germany');
}

export default function TibiaraNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-germany" />;
}
