import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-brazil');
}

export default function TibiascapeNoResetServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-brazil" />;
}
