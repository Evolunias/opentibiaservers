import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-server');
}

export default function LowrateBlazeraServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-server" />;
}
