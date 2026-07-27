import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-sabrehaven-login');
}

export default function PopularSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="popular-sabrehaven-login" />;
}
