import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-north-america');
}

export default function TibiascapeNoResetServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-north-america" />;
}
