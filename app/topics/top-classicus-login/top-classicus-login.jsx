import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classicus-login');
}

export default function TopClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="top-classicus-login" />;
}
