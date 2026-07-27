import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-calmera-ot-server');
}

export default function FreshStartCalmeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-calmera-ot-server" />;
}
