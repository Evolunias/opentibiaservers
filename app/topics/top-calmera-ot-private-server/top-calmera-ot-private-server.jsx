import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-calmera-ot-private-server');
}

export default function TopCalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-calmera-ot-private-server" />;
}
