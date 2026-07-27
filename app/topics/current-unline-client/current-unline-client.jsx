import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-client');
}

export default function CurrentUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="current-unline-client" />;
}
