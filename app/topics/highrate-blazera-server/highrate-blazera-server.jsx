import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-blazera-server');
}

export default function HighrateBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-blazera-server" />;
}
