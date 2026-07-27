import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-blazera-ot-server');
}

export default function CurrentBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-blazera-ot-server" />;
}
