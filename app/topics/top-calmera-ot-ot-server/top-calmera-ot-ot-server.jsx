import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-ot-server');
}

export default function TopCalmeraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-ot-server" />;
}
