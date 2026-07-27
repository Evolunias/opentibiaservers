import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-server');
}

export default function CurrentCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-server" />;
}
