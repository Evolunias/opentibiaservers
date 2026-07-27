import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-argentina');
}

export default function TibiascapeNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-argentina" />;
}
