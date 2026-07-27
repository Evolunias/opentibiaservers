import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-blazera-ot-server');
}

export default function LowrateBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-blazera-ot-server" />;
}
