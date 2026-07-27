import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-server');
}

export default function Tibia74ServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-server" />;
}
