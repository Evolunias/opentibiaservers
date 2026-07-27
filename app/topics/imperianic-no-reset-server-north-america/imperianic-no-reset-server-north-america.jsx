import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-no-reset-server-north-america');
}

export default function ImperianicNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="imperianic-no-reset-server-north-america" />;
}
