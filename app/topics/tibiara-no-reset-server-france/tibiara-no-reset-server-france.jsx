import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-france');
}

export default function TibiaraNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-france" />;
}
