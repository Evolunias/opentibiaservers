import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-usa');
}

export default function TibiascapeNoResetServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-usa" />;
}
