import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-login');
}

export default function CurrentTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-login" />;
}
