import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-status');
}

export default function TibiascapeStatusKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-status" />;
}
