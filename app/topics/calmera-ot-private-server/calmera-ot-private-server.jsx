import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-private-server');
}

export default function CalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-private-server" />;
}
