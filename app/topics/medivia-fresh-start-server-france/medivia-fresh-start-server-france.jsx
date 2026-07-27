import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('medivia-fresh-start-server-france');
}

export default function MediviaFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="medivia-fresh-start-server-france" />;
}
