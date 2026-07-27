import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-france-servers');
}

export default function MediviaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="medivia-france-servers" />;
}
