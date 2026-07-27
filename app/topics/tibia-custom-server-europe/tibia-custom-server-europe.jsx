import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-europe');
}

export default function TibiaCustomServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-europe" />;
}
