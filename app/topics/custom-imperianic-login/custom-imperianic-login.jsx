import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-imperianic-login');
}

export default function CustomImperianicLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-imperianic-login" />;
}
