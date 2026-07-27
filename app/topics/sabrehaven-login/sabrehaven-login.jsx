import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('sabrehaven-login');
}

export default function SabrehavenLoginKeywordPage() {
  return <StaticKeywordPage slug="sabrehaven-login" />;
}
