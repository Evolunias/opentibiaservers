import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiara-server');
}

export default function CurrentTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiara-server" />;
}
