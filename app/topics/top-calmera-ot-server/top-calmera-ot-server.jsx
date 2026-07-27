import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-server');
}

export default function TopCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-server" />;
}
