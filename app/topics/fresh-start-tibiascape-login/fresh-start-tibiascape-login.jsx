import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-login');
}

export default function FreshStartTibiascapeLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-login" />;
}
