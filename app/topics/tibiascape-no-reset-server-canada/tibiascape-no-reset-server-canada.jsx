import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-canada');
}

export default function TibiascapeNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-canada" />;
}
