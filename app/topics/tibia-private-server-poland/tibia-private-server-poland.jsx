import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-private-server-poland');
}

export default function TibiaPrivateServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibia-private-server-poland" />;
}
