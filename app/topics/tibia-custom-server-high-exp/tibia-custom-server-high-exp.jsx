import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-high-exp');
}

export default function TibiaCustomServerHighExpKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-high-exp" />;
}
