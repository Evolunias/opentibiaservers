import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibijka-client');
}

export default function ActiveTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="active-tibijka-client" />;
}
