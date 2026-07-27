import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-europe');
}

export default function TibiaOtServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-europe" />;
}
