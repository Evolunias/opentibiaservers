import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-uk');
}

export default function Tibia74ServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-uk" />;
}
