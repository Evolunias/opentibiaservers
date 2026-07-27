import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-server');
}

export default function Tibia15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-server" />;
}
