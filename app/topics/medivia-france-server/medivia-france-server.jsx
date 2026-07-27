import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-france-server');
}

export default function MediviaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="medivia-france-server" />;
}
