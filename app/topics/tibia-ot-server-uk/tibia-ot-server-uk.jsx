import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-uk');
}

export default function TibiaOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-uk" />;
}
