import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-no-reset-server-france');
}

export default function ImperianicNoResetServerFranceKeywordPage() {
  return <StaticKeywordPage slug="imperianic-no-reset-server-france" />;
}
