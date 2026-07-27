import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-server');
}

export default function CustomCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-server" />;
}
