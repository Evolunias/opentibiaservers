import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-france');
}

export default function TibiascapeNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-france" />;
}
