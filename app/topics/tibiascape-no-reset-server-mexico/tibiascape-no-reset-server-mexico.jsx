import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-mexico');
}

export default function TibiascapeNoResetServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-mexico" />;
}
