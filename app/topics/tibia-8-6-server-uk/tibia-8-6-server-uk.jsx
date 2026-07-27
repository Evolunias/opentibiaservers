import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-server-uk');
}

export default function Tibia86ServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-server-uk" />;
}
