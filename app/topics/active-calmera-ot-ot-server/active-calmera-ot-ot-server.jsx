import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-ot-server');
}

export default function ActiveCalmeraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-ot-server" />;
}
