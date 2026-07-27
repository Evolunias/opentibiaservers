import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-server');
}

export default function Tibia11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-server" />;
}
