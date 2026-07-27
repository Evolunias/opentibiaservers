import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classicus-login');
}

export default function BestClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="best-classicus-login" />;
}
