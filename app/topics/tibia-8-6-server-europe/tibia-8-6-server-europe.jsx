import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-europe');
}

export default function Tibia86ServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-europe" />;
}
