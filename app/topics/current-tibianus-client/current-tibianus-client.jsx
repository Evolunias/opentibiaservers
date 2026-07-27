import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-client');
}

export default function CurrentTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-client" />;
}
