import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibijka-client');
}

export default function CustomTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="custom-tibijka-client" />;
}
