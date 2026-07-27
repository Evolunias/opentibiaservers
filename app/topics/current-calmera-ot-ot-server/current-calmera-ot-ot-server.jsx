import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-calmera-ot-ot-server');
}

export default function CurrentCalmeraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="current-calmera-ot-ot-server" />;
}
