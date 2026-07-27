import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classicus-login');
}

export default function CurrentClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="current-classicus-login" />;
}
