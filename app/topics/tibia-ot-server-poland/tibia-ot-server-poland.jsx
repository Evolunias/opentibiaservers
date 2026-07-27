import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-poland');
}

export default function TibiaOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-poland" />;
}
