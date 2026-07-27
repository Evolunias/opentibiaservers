import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-canada-servers');
}

export default function MediviaCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-canada-servers" />;
}
