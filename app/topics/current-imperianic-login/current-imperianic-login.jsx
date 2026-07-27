import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-login');
}

export default function CurrentImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-login" />;
}
