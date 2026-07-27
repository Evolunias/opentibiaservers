import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-login');
}

export default function TibijkaLoginKeywordPage() {
  return <StaticKeywordPage slug="tibijka-login" />;
}
