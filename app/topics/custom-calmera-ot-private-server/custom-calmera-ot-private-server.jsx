import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-private-server');
}

export default function CustomCalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-private-server" />;
}
