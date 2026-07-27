import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-france-server');
}

export default function BlazeraFranceServerKeywordPage() {
  return <StaticKeywordPage slug="blazera-france-server" />;
}
