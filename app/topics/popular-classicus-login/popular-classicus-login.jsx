import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classicus-login');
}

export default function PopularClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-classicus-login" />;
}
