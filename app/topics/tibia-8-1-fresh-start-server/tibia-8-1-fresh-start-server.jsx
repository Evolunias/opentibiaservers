import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-fresh-start-server');
}

export default function Tibia81FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-fresh-start-server" />;
}
