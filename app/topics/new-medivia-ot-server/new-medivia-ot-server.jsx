import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-medivia-ot-server');
}

export default function NewMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="new-medivia-ot-server" />;
}
