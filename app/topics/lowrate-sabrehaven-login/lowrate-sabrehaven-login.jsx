import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-sabrehaven-login');
}

export default function LowrateSabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-sabrehaven-login" />;
}
