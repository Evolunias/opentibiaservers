import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-realera-ot-server');
}

export default function CurrentRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-realera-ot-server" />;
}
