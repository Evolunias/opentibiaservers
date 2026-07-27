import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-no-reset-server-france');
}

export default function TibianusNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-no-reset-server-france" />;
}
