import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-server');
}

export default function CurrentBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-server" />;
}
