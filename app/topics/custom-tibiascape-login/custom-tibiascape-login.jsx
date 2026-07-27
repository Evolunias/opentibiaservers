import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiascape-login');
}

export default function CustomTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiascape-login" />;
}
