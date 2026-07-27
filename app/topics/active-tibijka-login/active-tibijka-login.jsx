import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-login');
}

export default function ActiveTibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-login" />;
}
