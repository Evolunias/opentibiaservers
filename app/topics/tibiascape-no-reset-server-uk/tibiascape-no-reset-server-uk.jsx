import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-uk');
}

export default function TibiascapeNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-uk" />;
}
