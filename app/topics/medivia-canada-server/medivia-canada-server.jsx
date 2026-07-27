import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-canada-server');
}

export default function MediviaCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-canada-server" />;
}
