import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiascape-login');
}

export default function ActiveTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="active-tibiascape-login" />;
}
