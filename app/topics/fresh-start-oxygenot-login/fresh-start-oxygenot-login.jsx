import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oxygenot-login');
}

export default function FreshStartOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oxygenot-login" />;
}
