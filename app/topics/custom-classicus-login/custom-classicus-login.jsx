import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-classicus-login');
}

export default function CustomClassicusLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-classicus-login" />;
}
