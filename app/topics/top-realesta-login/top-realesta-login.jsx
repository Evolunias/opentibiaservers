import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-realesta-login');
}

export default function TopRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="top-realesta-login" />;
}
