import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-login');
}

export default function FreshStartRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-login" />;
}
