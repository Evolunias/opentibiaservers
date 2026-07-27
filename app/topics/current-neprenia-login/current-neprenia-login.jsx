import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-neprenia-login');
}

export default function CurrentNepreniaLoginKeywordPage() {
  return <StaticKeywordPage slug="current-neprenia-login" />;
}
