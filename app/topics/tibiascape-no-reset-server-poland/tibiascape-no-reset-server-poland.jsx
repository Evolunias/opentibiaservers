import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-poland');
}

export default function TibiascapeNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-poland" />;
}
