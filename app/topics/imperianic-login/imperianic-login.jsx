import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-login');
}

export default function ImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="imperianic-login" />;
}
