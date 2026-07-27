import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-client');
}

export default function CurrentTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-client" />;
}
