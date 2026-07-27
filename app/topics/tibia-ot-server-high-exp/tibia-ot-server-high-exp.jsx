import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-high-exp');
}

export default function TibiaOtServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-high-exp" />;
}
