import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server-europe');
}

export default function Tibia74ServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server-europe" />;
}
