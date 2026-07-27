import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-imperianic-client');
}

export default function CurrentImperianicClientKeywordPage() {
  return <StaticKeywordPage slug="current-imperianic-client" />;
}
