import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realesta-login');
}

export default function CurrentRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="current-realesta-login" />;
}
