import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-ot-server');
}

export default function MediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-ot-server" />;
}
