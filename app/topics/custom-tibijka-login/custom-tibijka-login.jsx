import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-login');
}

export default function CustomTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-login" />;
}
