import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-no-reset-server-europe');
}

export default function TibiascapeNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-no-reset-server-europe" />;
}
