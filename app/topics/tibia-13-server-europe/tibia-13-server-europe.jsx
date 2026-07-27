import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-server-europe');
}

export default function Tibia13ServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-server-europe" />;
}
