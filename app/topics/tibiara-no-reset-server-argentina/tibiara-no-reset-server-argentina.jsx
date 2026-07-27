import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-no-reset-server-argentina');
}

export default function TibiaraNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiara-no-reset-server-argentina" />;
}
