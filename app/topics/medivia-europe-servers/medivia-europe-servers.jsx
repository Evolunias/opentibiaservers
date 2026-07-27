import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-europe-servers');
}

export default function MediviaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-europe-servers" />;
}
