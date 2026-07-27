import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-no-reset-server-france');
}

export default function OriginaltibiaNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-no-reset-server-france" />;
}
