import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-ot-server');
}

export default function CustomCalmeraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-ot-server" />;
}
