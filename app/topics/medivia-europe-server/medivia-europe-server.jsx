import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-europe-server');
}

export default function MediviaEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-europe-server" />;
}
