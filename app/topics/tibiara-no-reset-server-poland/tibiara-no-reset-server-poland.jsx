import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-poland');
}

export default function TibiaraNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-poland" />;
}
