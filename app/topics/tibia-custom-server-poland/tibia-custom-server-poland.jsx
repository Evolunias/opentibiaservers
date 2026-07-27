import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-custom-server-poland');
}

export default function TibiaCustomServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibia-custom-server-poland" />;
}
