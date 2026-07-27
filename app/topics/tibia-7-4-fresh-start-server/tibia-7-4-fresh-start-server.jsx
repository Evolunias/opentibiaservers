import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-fresh-start-server');
}

export default function Tibia74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-fresh-start-server" />;
}
