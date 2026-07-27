import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiascape-login');
}

export default function NewTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="new-tibiascape-login" />;
}
