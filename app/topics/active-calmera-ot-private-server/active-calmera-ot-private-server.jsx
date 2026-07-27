import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-calmera-ot-private-server');
}

export default function ActiveCalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-calmera-ot-private-server" />;
}
