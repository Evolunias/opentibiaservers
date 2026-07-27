import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-sabrehaven-login');
}

export default function FreshStartSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-sabrehaven-login" />;
}
