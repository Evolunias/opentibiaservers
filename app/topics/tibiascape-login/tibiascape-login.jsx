import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-login');
}

export default function TibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-login" />;
}
