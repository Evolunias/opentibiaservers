import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-thaisot-login');
}

export default function FreshStartThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-thaisot-login" />;
}
