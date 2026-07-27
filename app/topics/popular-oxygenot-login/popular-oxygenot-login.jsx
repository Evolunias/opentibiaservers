import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-login');
}

export default function PopularOxygenotLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-login" />;
}
