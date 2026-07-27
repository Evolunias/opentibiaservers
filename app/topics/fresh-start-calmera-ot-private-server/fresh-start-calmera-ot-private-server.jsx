import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-private-server');
}

export default function FreshStartCalmeraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-private-server" />;
}
