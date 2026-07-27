import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-client');
}

export default function CurrentElderaClientKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-client" />;
}
