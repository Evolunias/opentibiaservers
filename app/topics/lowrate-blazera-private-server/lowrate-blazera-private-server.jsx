import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-private-server');
}

export default function LowrateBlazeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-private-server" />;
}
