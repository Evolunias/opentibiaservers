import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-medivia-ot-server');
}

export default function FreshStartMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-medivia-ot-server" />;
}
