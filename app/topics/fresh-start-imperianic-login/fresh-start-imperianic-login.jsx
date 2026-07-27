import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-imperianic-login');
}

export default function FreshStartImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-imperianic-login" />;
}
